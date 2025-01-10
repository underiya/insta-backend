import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PostEntity } from 'src/entities/post.entity';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { PostService } from 'src/services/post/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FilesInterceptor('media', 10, {
      // storage: memoryStorage(),
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async createPost(
    @Body() postData: Partial<PostEntity>,
    @UploadedFiles() files: Express.Multer.File[],
    @Req() data: any,
  ): Promise<PostEntity> {
    const { email } = data;
    if (!files) {
      console.log('No file uploaded');
      throw new Error('No file uploaded');
    }
    return this.postService.createPost(postData, files, email);
  }

  @Get(':id')
  async getPost(@Param('id') id: number): Promise<PostEntity | undefined> {
    return this.postService.getPost(id);
  }

  @Get()
  async getPosts(): Promise<PostEntity[]> {
    return this.postService.getPosts();
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: number,
    @Body() postData: Partial<PostEntity>,
  ): Promise<PostEntity | undefined> {
    return this.postService.updatePost(id, postData);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<void> {
    return this.postService.deletePost(id);
  }
}

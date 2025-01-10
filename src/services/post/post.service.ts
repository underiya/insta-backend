import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(
    postData: Partial<PostEntity>,
    files: Express.Multer.File[],
    email: string,
  ): Promise<PostEntity> {
    console.log(email, files);
    const post = this.postRepository.create(postData);
    return this.postRepository.save(post);
  }

  async getPost(id: number): Promise<PostEntity | undefined> {
    return this.postRepository.findOne({ where: { id } });
  }

  async getPosts(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async updatePost(
    id: number,
    postData: Partial<PostEntity>,
  ): Promise<PostEntity | undefined> {
    await this.postRepository.update(id, postData);
    return this.postRepository.findOne({ where: { id } });
  }

  async deletePost(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor() {}

  createComment() {
    return 'comment created';
  }

  updateComment() {
    return 'update comment';
  }

  deleteComment() {
    return 'delete comment';
  }
}

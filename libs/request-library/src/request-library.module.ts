import { Module } from '@nestjs/common';
import { RequestLibraryService } from './request-library.service';

@Module({
  providers: [RequestLibraryService],
  exports: [RequestLibraryService],
})
export class RequestLibraryModule {}

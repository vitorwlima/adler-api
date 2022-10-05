import { DiaryCreateData, DiaryRepository } from '.'
import { prisma } from '../../../prisma'

export class PrismaDiaryRepository implements DiaryRepository {
  async create ({ date, mood, text, userId }: DiaryCreateData): Promise<void> {
    await prisma.diary.create({
      data: {
        text,
        date,
        mood
      }
    })
  }
}

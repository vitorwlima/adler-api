import { HttpException } from '../../../../error-handler'
import { DiaryRepository, DiaryCreateData } from '../../repository'

export class CreateDiaryUseCase {
  constructor (private readonly diaryRepository: DiaryRepository) {}

  private isDateValid (date: string): boolean {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/
    return dateRegex.test(date)
  }

  async execute (request: DiaryCreateData): Promise<void> {
    const { date, userId, text } = request

    if (date === undefined) {
      throw new HttpException('Date is required', 400)
    }

    if (!this.isDateValid(date)) {
      throw new HttpException('Date is invalid', 422)
    }

    if (userId === undefined) {
      throw new HttpException('User is required', 400)
    }

    if (text === undefined) {
      request.text = ''
    }

    await this.diaryRepository.create(request)
  }
}

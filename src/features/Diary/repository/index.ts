export interface DiaryCreateData {
  text: string
  mood?: number
  userId: string
  date: string
}

export interface DiaryRepository {
  create: (data: DiaryCreateData) => Promise<void>
}

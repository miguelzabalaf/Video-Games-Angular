// MenuItem
export interface MenuItem {
	name: string,
	path: string,
}

export interface VideoGame {
  title: string,
  company: string,
  description: string,
  image_url: string,
  video_url: string,
  tags: string[],
  release: String,
  score: number,
  platform: string[],
  available: boolean,
  offer: boolean,
  deduction?: number,
  price: number,


}

export interface Post {
    id: number
    title: string
    content: string
}

export interface PostProps {
    post: Post
}

export interface PostsPorps {
    posts: Post[]
}
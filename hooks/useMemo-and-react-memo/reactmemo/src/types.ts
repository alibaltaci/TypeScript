export interface IComment {
    id: number
    user: string
    comment: string
}

export interface ICommentProp {
    productComment: IComment
}

export interface IProduct {
    id: number
    title: string
    description: string
    price: number
    image: string
    comments: IComment[]
}

export interface IProductProp {
    product: IProduct
}
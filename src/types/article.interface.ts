import { DocumentReference, Timestamp } from "firebase/firestore"

export interface Article {
    id: string
    name: string
    description : string | null
    category: DocumentReference
    quantity: string
    created_at : Timestamp
}
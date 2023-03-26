import { Polybase } from '@polybase/client'

const db = new Polybase({
  defaultNamespace: 'giftcard',
})

export const defineSchema = async () => {
  await db.applySchema(
    `
      @public
      collection Giftcard {
        id: string;
        url: string;

        constructor (id: string, url: string) {
          this.id = id;
          this.url = url;
        }
      }
    `,
    'giftcard',
  )
}

export const addGiftCard = async (url: string) => {
  await db.collection('Giftcard').create([url, url])
}

export const mygiftcardall = async () => {
  const data = await db.collection('Giftcard').get()
  return data
}

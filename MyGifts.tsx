import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import MyGiftCard from 'components/MyGiftCard'
import { useMyGifts } from 'store/gifts'

export default function MyGifts() {
  const myGifts = [
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
    {
      imageDataUrl:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6349/6349800_sd.jpg;maxHeight=640;maxWidth=550',
      signedBy: 'Dr. Smith',
      isUnwrapped: false,
      tokenId: '1',
      amount: '100',
    },
  ]
  const { data: gifts, isLoading } = useMyGifts()
  console.log('🚀 ~ file: MyGifts.tsx:37 ~ MyGifts ~ isLoading:', isLoading)

  return (
    <>
      <Typography variant="h5" textAlign="center" sx={{ mt: 4 }}>
        My Gifts
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
        {isLoading && (
          <Stack alignItems="center">
            <CircularProgress />
          </Stack>
        )}

        {myGifts && (myGifts ?? []).length > 0 && (
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {(myGifts ?? []).map((it) => (
              <Grid item key={it.tokenId}>
                <MyGiftCard giftCard={it} />
              </Grid>
            ))}
          </Grid>
        )}

        {!isLoading && (myGifts ?? []).length === 0 && (
          <Alert severity="info">You don&apos;t have any gifts yet.</Alert>
        )}
      </Container>
    </>
  )
}

import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useTweets } from '../../hooks/useTweets'

const validationSchema = yup.object({
  content: yup.string().required('Content is required').max(280),
  topic: yup.string().required('Topic is required').max(50),
})

export function SendTweet() {
  const { sendTweet } = useTweets()
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      content: '',
      topic: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true)
      await sendTweet(values.topic, values.content)
      setLoading(false)
    },
  })

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 1 }}>
      <TextField
        sx={{ width: 1 }}
        id="content"
        name="content"
        label="What's happening?"
        multiline
        rows={4}
        variant="filled"
        value={formik.values.content}
        onChange={formik.handleChange}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content ? formik.errors.content : ' '}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <TextField
          sx={{ width: 0.3 }}
          label="Topic"
          variant="filled"
          id="topic"
          name="topic"
          value={formik.values.topic}
          onChange={formik.handleChange}
          error={formik.touched.topic && Boolean(formik.errors.topic)}
          helperText={formik.touched.topic ? formik.errors.topic : ' '}
        />

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {loading && <CircularProgress />}

          <Button type="submit" disabled={loading} variant="contained">
            Tweet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

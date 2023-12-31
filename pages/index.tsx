import { Layout } from '@/components/layouts'
import { EntryList, NewEntry } from '@/components/ui'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Layout title='Task app'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />
            <CardContent>
              <NewEntry status='pending'/> 
              <EntryList status='pending'/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In progress' />
            <CardContent>
              <NewEntry status='in-progress' />
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completed' />
            <CardContent>
              <NewEntry status='finished' />
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}

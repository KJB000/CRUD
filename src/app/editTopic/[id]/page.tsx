import { auth } from '@/auth'
import EditTopicForm from '@/components/EditTopicForm'
<<<<<<< HEAD
import { redirect } from 'next/navigation'
=======
>>>>>>> ba5a737a6e563cbd6cf459f74067e2fe29c296ee
import React from 'react'

const apiUrl = process.env.API_URL

<<<<<<< HEAD
async function getTopicById(id: string) {
=======
const getTopicById = async (id: string) => {
>>>>>>> ba5a737a6e563cbd6cf459f74067e2fe29c296ee
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch topic')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching topic:', error)
    return null
  }
}

export default async function EditTopicPage({
  params,
}: {
  params: { id: string }
}) {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  const { id } = params
  const data = await getTopicById(id)

  if (!data || !data.topic) {
    return <p>Topic not found</p>
  }

  const { title, description } = data.topic

  return <EditTopicForm id={id} title={title} description={description} />
}

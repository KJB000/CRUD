import EditTopicForm from '@/components/EditTopicForm';

const apiUrl = process.env.API_URL;

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topic.');
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return { topic: null }; // 오류 발생 시 기본값 반환
  }
};

export default async function EditTopic({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params;
  const { topic } = await getTopicById(id);

  if (!topic) {
    return <div>Failed to load topic. Please try again later.</div>;
  }

  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
}

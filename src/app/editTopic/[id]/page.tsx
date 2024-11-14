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
    const data = await res.json();
    return data && data.topic ? { topic: data.topic } : { topic: null }; // 항상 { topic: ... } 형태로 반환
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
  const data = await getTopicById(id); // getTopicById 호출 후 변수에 저장

  if (!data || !data.topic) {
    // 데이터가 없거나 topic이 null일 경우 처리
    return <div>Failed to load topic. Please try again later.</div>;
  }

  const { title, description } = data.topic;
  return <EditTopicForm id={id} title={title} description={description} />;
}

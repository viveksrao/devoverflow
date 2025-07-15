const QuestionDetailsPage = async ({ params }: RouteParams) => {
  const { id } = await params;
  return <>Question Details Page: {id}</>;
};

export default QuestionDetailsPage;

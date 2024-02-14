import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className="text-center">
      <h1>Oops!</h1>
      <p>Désolé. une erreur est survenue.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
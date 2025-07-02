import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold pt-20">
        Reach the world’s largest audience of developers and technologists.{" "}
      </h1>
      <h1 className="h1-bold font-space-grotesk">
        Reach the world’s largest audience of developers and technologists.{" "}
      </h1>
      <form
        className="px-10"
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
}

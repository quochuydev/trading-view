import type { MetaFunction, LoaderFunction, HeadersFunction } from "remix";
import { useRouteData } from "remix";
import { PrismaClient, Account } from "@prisma/client";

export const loader: LoaderFunction = async () => {
  const prisma = new PrismaClient();

  async function main() {
    const accounts = await prisma.account.findMany({
      where: {
        //
      },
    });
    console.log({ accounts });

    return accounts;
  }

  return main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

export default function Index() {
  const data = useRouteData();
  console.log({ data });

  return (
    <div>
      <div className="register-form">
        <label htmlFor="">email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">password</label>
        <input type="text" name="" id="" />
        <label htmlFor="">confirm password</label>
        <input type="text" name="" id="" />
        <button>Register</button>
      </div>

      <div className="login-form">
        <label htmlFor="">email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">password</label>
        <input type="text" name="" id="" />
        <button>Login</button>
      </div>

      <div className="profile">
        <p>email: email</p>
        <p>star: 100 star</p>
      </div>
      <iframe
        width="560"
        height="315"
        // src="https://www.youtube.com/embed/uUB7wnWeMdM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // frameborder="0"
        // allowfullscreen
      ></iframe>
    </div>
  );
}

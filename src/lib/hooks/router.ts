/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router";
import { type Url } from "next/dist/shared/lib/router/router";
import { useCallback } from "react";

const myRouter = () => {
  const router = useRouter();
  const { query } = router;
  const updateRouter = useCallback(
    (replaceWith: Url) => {
      void router.replace(replaceWith, undefined, { scroll: false });
    },
    [router]
  );
  return { updateRouter, router, query };
};

export default myRouter;

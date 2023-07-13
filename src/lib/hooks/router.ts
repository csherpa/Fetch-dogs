/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useCallback } from "react";

const myRouter = () => {
  const router = useRouter();
  const { query } = router;
  const updateRouter = useCallback(
    (replaceWith: unknown) => {
      void router.replace(replaceWith, undefined, { scroll: false });
    },
    [router]
  );
  return { updateRouter, router, query };
};

export default myRouter;

"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

// import { createContext } from "react";
// import { createContextualCan } from "@casl/react";
// import ability from "@/utils/ability";

// export const AbilityContext = createContext<any>(ability);
// export const Can = createContextualCan(AbilityContext.Consumer);

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <SessionProvider> */}
        {/* <AbilityContext.Provider value={ability}> */}
          {children}
        {/* </AbilityContext.Provider> */}
      {/* </SessionProvider> */}
    </QueryClientProvider>
  );
};

export default Providers;

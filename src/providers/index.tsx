import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import custonTheme from "../styles/theme";
import { AllClassProvider } from "./AllClass";
import { AnalysisProvider } from "./Analyses";
import { AuthProvider } from "./Auth";
import { ClassProvider } from "./Class";
import { LogoutProvider } from "./Logout";
import { UserRegistrationProvider } from "./UserRegistration";
import { UsersProvider } from "./Users";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <ClassProvider>
          <AllClassProvider>
            <UserRegistrationProvider>
              <AnalysisProvider>
                <LogoutProvider>
                  <ChakraProvider theme={custonTheme}>
                    {children}
                  </ChakraProvider>
                </LogoutProvider>
              </AnalysisProvider>
            </UserRegistrationProvider>
          </AllClassProvider>
        </ClassProvider>
      </UsersProvider>
    </AuthProvider>
  );
};

import { SlidesProvider } from "./Slides/context";

const compose = (providers) =>
  // eslint-disable-next-line react/display-name
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

export const AppProvider = compose([SlidesProvider]);
compose.displayName = "compose";

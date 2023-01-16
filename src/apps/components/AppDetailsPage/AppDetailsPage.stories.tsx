import Decorator from "@dashboard/storybook/Decorator";
import { storiesOf } from "@storybook/react";
import React from "react";

import { appDetails } from "../../fixtures";
import AppDetailsPage, { AppDetailsPageProps } from "./AppDetailsPage";

const props: AppDetailsPageProps = {
  data: appDetails,
  loading: false,
  navigateToApp: () => undefined,
  onAppActivateOpen: () => undefined,
  onAppDeactivateOpen: () => undefined,
  onAppDeleteOpen: () => undefined,
};

storiesOf("Apps / App details", module)
  .addDecorator(Decorator)
  .add("default", () => <AppDetailsPage {...props} />)
  .add("loading", () => <AppDetailsPage {...props} loading={true} />);

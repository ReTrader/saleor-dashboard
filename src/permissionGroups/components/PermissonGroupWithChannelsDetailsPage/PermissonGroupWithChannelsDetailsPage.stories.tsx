export * from "./PermissonGroupWithChannelsDetailsPage";
import { permissions } from "@dashboard/fixtures";
import React from "react";

import { emptyPermissionGroup, permissionGroup, users } from "../../fixtures";
import {
  PermissonGroupWithChannelsDetailsPage,
  PermissonGroupWithChannelsDetailsPageProps,
} from "./PermissonGroupWithChannelsDetailsPage";

const props: PermissonGroupWithChannelsDetailsPageProps = {
  disabled: false,
  errors: [],
  isChecked: () => false,
  members: users,
  onAssign: () => undefined,
  onSort: () => undefined,
  onSubmit: () => undefined,
  onUnassign: () => undefined,
  permissionGroup,
  permissions,
  permissionsExceeded: false,
  saveButtonBarState: undefined,
  selected: 0,
  sort: null,
  toggle: () => undefined,
  toggleAll: () => undefined,
  toolbar: null,
  channels: [],
  disabledChannelPermissions: false,
};

export default {
  title: "Permission Groups / Permission Group Details",
};

export const Default = () => (
  <PermissonGroupWithChannelsDetailsPage {...props} />
);

export const NoMembers = () => (
  <PermissonGroupWithChannelsDetailsPage
    {...props}
    members={[]}
    permissionGroup={emptyPermissionGroup}
  />
);

export const Loading = () => (
  <PermissonGroupWithChannelsDetailsPage
    {...props}
    disabled={true}
    permissionGroup={undefined}
    permissions={undefined}
  />
);

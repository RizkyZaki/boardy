import React from "react";
import { EmptyOrg } from "./_components/empty-org";

function page() {
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      <EmptyOrg />
    </div>
  );
}

export default page;

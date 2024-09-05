import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/element.png" alt="empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Boardy</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to get started
      </p>
    </div>
  );
};

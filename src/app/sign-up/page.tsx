import Logo from "@/components/layout/logo";
import { SignUpForm } from "@/components/signup-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-8 h-full w-full items-center justify-center p-6 md:p-10">
      <Logo className="w-full max-w-60" />
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}

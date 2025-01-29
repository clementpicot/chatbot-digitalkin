import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { redirect } from "next/navigation";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const t = useTranslations();

  const handleSubmit = async () => {
    "use server";

    // This part would actually handle all the sign up logic through server action
    // but for the purpose of the test I just redirect the user to the dashboard page

    // We could also use different providers such as Google, Facebook, etc. But because
    // all users will be using this tool for their own job, I don't think this is valuable
    // to add these providers, especially because they will be using their Org. emails

    redirect("/dashboard");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("login.signUp")}</CardTitle>
          <CardDescription>{t("login.signUpDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  defaultValue="j.costa@mycompany.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">{t("login.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  defaultValue="digitalkin"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">{t("login.repeatPassword")}</Label>
                <Input
                  id="repeat-password"
                  type="password"
                  defaultValue="digitalkin"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {t("login.signUp")}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {t("login.alreadyAccount")}{" "}
              <Link href="/" className="underline underline-offset-4">
                {t("login.login")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

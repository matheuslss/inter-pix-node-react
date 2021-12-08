import { CircleContainer } from "./styles";

type UserInfoProps = {
  initials: string;
};

export default function UserCircle({ initials }: UserInfoProps) {
  return <CircleContainer>{initials}</CircleContainer>;
}

import {
  StatementContainer,
  StatementItemContainer,
  StatementItemInfo,
  StatementItemImage,
} from "./styles";

import { FiDollarSign } from "react-icons/fi";
import { format } from "date-fns";

type StatementItemProps = {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updatedAt: Date;
};

export default function Statement() {
  const statements: StatementItemProps[] = [
    {
      user: {
        firstName: "Emerson",
        lastName: "Henrique",
      },
      value: 250.0,
      type: "pay",
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: "Matheus",
        lastName: "Lucas",
      },
      value: 270.0,
      type: "received",
      updatedAt: new Date(),
    },
  ];
  return (
    <StatementContainer>
      {statements.map((statement, index) => (
        <StatementItem {...statement} key={index} />
      ))}
    </StatementContainer>
  );
}

const StatementItem = (
  { user, value, type, updatedAt }: StatementItemProps,
  key: number
) => {
  return (
    <StatementItemContainer key={key}>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          {type === "pay" ? "Pago a " : "Recebido de "}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};

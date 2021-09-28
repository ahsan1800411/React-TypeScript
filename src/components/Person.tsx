import { PersonProps } from "./Person.types";

export default function Person({ name }: PersonProps) {
  return (
    <div>
      {name.first} - {name.last}
    </div>
  );
}

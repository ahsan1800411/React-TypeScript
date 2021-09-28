type GreetProps = {
  name: string;
  messageCount?: number;
  isLogged: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLogged ? (
        <h1>
          Hi {props.name} , You have {messageCount} unread messages!
        </h1>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
}

type StatusProps = {
  status: "loading" | "error" | "success";
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "error") {
    message = "Error";
  } else if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "success";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

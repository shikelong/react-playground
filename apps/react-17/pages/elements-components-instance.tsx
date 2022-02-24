import { Console, Hook, Unhook } from "console-feed";
import { LogsContainer } from "../components/LogContainer";

export default function ElementsVsComponentsVsInstance() {
  return (
    <div>
      <h2>Elements Vs Components Vs Instance</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(<div>element content</div>);
        }}
      >
        Show Div Element
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(<LogsContainer></LogsContainer>);
        }}
      >
        Show Use Defined Element
      </button>
      <LogsContainer></LogsContainer>
    </div>
  );
}

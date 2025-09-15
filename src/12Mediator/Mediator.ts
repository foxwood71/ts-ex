import type Participaint from "./Participaint";

export default interface Mediator {
  participantChanged(participant: Participaint): void;
}

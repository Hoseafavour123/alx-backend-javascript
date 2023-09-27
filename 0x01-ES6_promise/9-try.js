export default function guardrail(mathFunction) {
  const queue = [];
  queue.append(mathFunction());
  queue.append('Guardrail was processed');

  return queue;
}

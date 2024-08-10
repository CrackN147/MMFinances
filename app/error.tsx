type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {
  return <>Error</>
}
import { Flex } from '../Layout/Flex';

export const Spinner = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContents="center"
      alignItems="center"
      style={{ width: '100%', height: '200px' }}
    >
      <div id={'loading'} />
      <p>Loading...</p>
    </Flex>
  );
};

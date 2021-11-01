import { useModel } from 'umi';

import styles from './index.scss';

export default function Index() {
  const { initialState, loading, error, setInitialState } = useModel(
    '@@initialState',
  ) as any;

  console.log(initialState, loading, error);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <>{JSON.stringify(initialState)}</>
    </div>
  );
}

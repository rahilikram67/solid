import { Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
const modules = import.meta.glob("./assets/icon/*.png")
const App: Component = () => {
  const [files, setFiles] = createSignal([]);
  for (const path in modules) {
    modules[path]().then((mod: any) => {
      setFiles([...files(), mod.default] as any)
    })
  }
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <For each={files()}>
          {(file: any) => <img src={file} />}
        </For>
      </header>
    </div>
  );
};

export default App;

import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export function createPersistedStore<T>(
  config: StateCreator<T>,
  options: PersistOptions<T>
) {
  return create(persist(config, options));
}

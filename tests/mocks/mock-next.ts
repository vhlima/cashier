/* eslint-disable import/no-extraneous-dependencies */
import mockRouter from 'next-router-mock';

import { vi } from 'vitest';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

export const mockedRouter = mockRouter;

export const MockedRouterProvider = MemoryRouterProvider;
/* eslint-disable @typescript-eslint/no-unsafe-return */
vi.mock('next/router', () => require('next-router-mock'));

// This file is part of midnightntwrk/example-counter.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CompactSamples, type CompactSamplesPrivateState } from '@midnight-ntwrk/counter-contract';
import type { ImpureCircuitId, MidnightProviders } from '@midnight-ntwrk/midnight-js-types';
import type { DeployedContract, FoundContract } from '@midnight-ntwrk/midnight-js-contracts';

export type CompactSamplesCircuits = ImpureCircuitId<CompactSamples.Contract<CompactSamplesPrivateState>>;

export const CompactSamplesPrivateStateId = 'counterPrivateState';

export type CompactSamplesProviders = MidnightProviders<CompactSamplesCircuits, typeof CompactSamplesPrivateStateId, CompactSamplesPrivateState>;

export type CompactSamplesContract = CompactSamples.Contract<CompactSamplesPrivateState>;

export type DeployedCompactSamplesContract = DeployedContract<CompactSamplesContract> | FoundContract<CompactSamplesContract>;

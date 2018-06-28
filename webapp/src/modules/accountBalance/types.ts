import { ActionType } from 'typesafe-actions'
import { LoadingState } from 'modules/loading/types'
import * as actions from 'modules/accountBalance/actions'
import { ModelByAddress } from 'lib/types'

export const FETCH_ACCOUNT_BALANCES_REQUEST = '[Request] Fetch Account Balances'
export const FETCH_ACCOUNT_BALANCES_SUCCESS = '[Success] Fetch Account Balances'
export const FETCH_ACCOUNT_BALANCES_FAILURE = '[Failure] Fetch Account Balances'

// Interface and type definitions

export type FetchAccountBalancesRequest = ReturnType<
  typeof actions.fetchAccountBalancesRequest
>

export type AccountBalanceActions = ActionType<typeof actions>

export interface AccountBalance {
  address: string
  token_address: string
  balance: number
}

export type AccountBalanceState = {
  data: ModelByAddress<AccountBalance>
  loading: LoadingState
  error: string | null
}
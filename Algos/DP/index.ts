import { logPerformance } from "../../perf-hook";
import { catalan, catalan_memo, catalan_tab } from "./catalan-number";
import { coin_change, coin_change_memo, coin_change_tab } from "./coin-change";
import { editDistance, editDistance_memo } from "./edit-distance";
import { gold_mine, gold_mine_memo_driver, gold_mine_tab } from "./gold-mine";
import { max_robbery, max_robbery_memo, max_robbery_tab } from "./house-robber";
import { knap_sack } from "./knap-sack";
import { lcs_rec, lcs_memoization, lcs_tabulation } from "./lcs";
import { paths, paths_memo, paths_tab } from "./matrix-path";
import { min_cost, min_cost_memo, min_cost_tab } from "./min-cost";
import { random2DArray, randomArray } from "./util";
import { ways, ways_memo, ways_tab } from './ways-to-jump';

class DP {
  lcs() {
    const s1 = 'abcdefghijklmnopqrstuvwxyz';
    const s2 = 'abcdefghjklmnoqrsuvwyz';

    logPerformance(lcs_rec, s1, s2);
    logPerformance(lcs_memoization(s1, s2))
    logPerformance(lcs_tabulation, s1, s2)
  }

  cost() {
    const matrix = random2DArray();
    logPerformance(min_cost, matrix)
    logPerformance(min_cost_memo, matrix)
    logPerformance(min_cost_tab, matrix);
  }

  paths() {
    const matrix = [
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0]
    ];
    logPerformance(paths, matrix);
    logPerformance(paths_memo, matrix);
    logPerformance(paths_tab, matrix);
  }

  robbery() {
    const arr = randomArray();
    logPerformance(max_robbery, arr);
    logPerformance(max_robbery_memo, arr);
    logPerformance(max_robbery_tab, arr);
  }

  goldMine() {
    const matrix = random2DArray();

    logPerformance(gold_mine, matrix);
    logPerformance(gold_mine_memo_driver, matrix);
    logPerformance(gold_mine_tab, matrix);
  }

  editDistance() {
    const s1 = 'Hello Vikas!';
    const s2 = 'Hiloo Viaks';
    logPerformance(editDistance, s1, s2);
    logPerformance(editDistance_memo, s1, s2)
  }

  waysToJump() {
    const arr = [2, 4, 5, 8];
    logPerformance(ways, 10, arr);
    logPerformance(ways_memo, 10, arr);
    logPerformance(ways_tab, 10, arr);
  }

  coinChange() {
    const coins = [2, 3, 5, 7];
    logPerformance(coin_change, 33, coins);
    logPerformance(coin_change_memo, 33, coins);
    logPerformance(coin_change_tab, 33, coins);
  }

  knapSack() {
    const values = [20, 50, 70, 80, 30, 60];
    const weights = [2, 4, 7, 10, 12, 15];
    logPerformance(knap_sack, values, weights, 31)
  }

  catalan(n = 50) {
    // logPerformance(catalan, n);
    logPerformance(catalan_memo, n);
    logPerformance(catalan_tab, n);
  }
}

const dp = new DP();

// dp.lcs();
// dp.cost();
// dp.paths();
// dp.robbery();
// dp.goldMine();
// dp.editDistance();
// dp.waysToJump();
// dp.coinChange();
// dp.knapSack();
dp.catalan();
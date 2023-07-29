import { logPerformance } from "../../perf-hook";
import { gold_mine, gold_mine_memo_driver, gold_mine_tab } from "./gold-mine";
import { max_robbery, max_robbery_memo, max_robbery_tab } from "./house-robber";
import { lcs_rec, lcs_memoization, lcs_tabulation } from "./lcs";
import { paths, paths_memo, paths_tab } from "./matrix-path";
import { min_cost, min_cost_memo, min_cost_tab } from "./min-cost";
import { random2DArray, randomArray } from "./util";

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
}

const dp = new DP();

// dp.lcs();
// dp.cost();
// dp.paths();
// dp.robbery();
dp.goldMine();
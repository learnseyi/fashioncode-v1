import Branch from './icon-branch.svg';
import Dollar from './dollar.svg';
import DollarHand from './dollar-hand.svg';
import Insurance from './icon-insurance.svg';
import Investment from './icon-investments.svg';
import Vault from './vault.svg';

const ImageUrl = [
 {
     name: 'Banking',
     url: Branch,
     childLink: ['Slim\'s Financial']
 },
 {
     name: 'Capital Markets',
     url: Dollar,
     childLink: ['Slim\'s Mutual Funds']
     
 },
 {
     name: 'Wealth Management',
     url: DollarHand,
     childLink: ['Investing at Slim\'s Financial', 'Slim\'s Investment Porfolio']
 },
 {
     name: 'Insurance',
     url: Insurance,
     childLink: ['Slim\'s Insurance', 'Slim\'s Insurance Plans']
 },
 {
     name: 'Investing at Slim\'s Financial',
     url: Investment,
     childLink: ['Investing at Slim\'s Financial', 'Slim\'s Investment Porfolio']
 },
 {
     name: 'Investor & Treasury Services',
     url: Vault,
     childLink: ['Slim\'s Treasury Services']
 }
]

export default ImageUrl;

import { useContext } from 'react';
import Card, { CardBody, CardGroup, CardTitle } from '../../components/Card';
import Chip from '../../components/Chip';
import Countdown from '../../components/Countdown';
import InfoToken from '../../components/InfoToken';
import { Loadable, Loader } from '../../components/Loader';
import Page from '../../components/Page';
import PriceChart from '../../components/PriceChart';
import Cube from '../../svg/icons/cube.png';
import TransactionList from '../../components/TransactionList';
import { AuthContext } from '../../context/AuthContext';
import { ProjectContext } from '../../context/ProjectContext';
import { StageContext } from '../../context/StageContext';
import { Component } from '../../types/Util';
import {
  capitalize,
  formatLargeNumber,
  formatNumber,
  getTimeString,
  roundToDP,
} from '../../util';
import './DashboardPage.css';
import Globe from '../../svg/icons/globe.png';
import Table from '../../components/TableData/Table';

const DashboardPage: Component = () => {
  const { currentProject, currProjectRequest } = useContext(ProjectContext);
  const { activeStage, activeStageRequest } = useContext(StageContext);
  const { user, userRequest } = useContext(AuthContext);

  const loading =
    currProjectRequest.fetching ||
    activeStageRequest.fetching ||
    userRequest.fetching;

  return (
    <Page title='Dashboard' path='/' userRestricted>
      <div className='dashboard-page <md:gap-2 <sm:!p-4'>
        <Loader loading={loading}>
          <div className='flex flex-[2] flex-col flex-gap-y-6'>
            <div className='flex flex-gap-x-6 dashboard-card-1'>
              <div className='dashboard-language py-5 float-right'>
                <img src={Globe} alt='Globe' />
                <select name='select' className='language-select'>
                  <option value='eng'>English</option>
                  <option value='esp'>Spanish</option>
                  <option value='ita'>Italian</option>
                  <option value='ger'>German</option>
                  <option value='frn'>French</option>
                </select>
              </div>
            </div>
            {activeStage?.end_date && (
              <Card className='dashboard-card p-4'>
                <div className='small text-white head'>
                  Dashboard
                </div>
                <InfoToken />
              </Card>
            )}
            {(activeStage?.type === 'dynamic' || loading) && <PriceChart />}
            <div className='dashboard-card'>
              <div className='card-header flex flex-col'>
                <div className='table-data'>
                  <img src={Cube} alt='' />
                  <span className='pl-2'>Price Chart</span>
                </div>
                <Table />
              </div>
            </div>
          </div>
        </Loader>
      </div>
    </Page>
  );
};

export default DashboardPage;

<?php
namespace Grav\Theme;

use Grav\Common\Theme;
use Grav\Common\User;
use Grav\Common\Grav;
use Grav\Common\Data;
use RocketTheme\Toolbox\Event\Event as EventInterface;

class PrizayuBiz extends Theme
{
    // Add author in page option
    public function onBlueprintCreated(EventInterface $event)
    {
        static $inEvent = false;
        $blueprint = $event['blueprint'];
        $form = $blueprint->form();
        $advanced_tab_exists = isset($form['fields']['tabs']['fields']['advanced']);
        
        if (!$inEvent && $advanced_tab_exists) {
            $inEvent = true;
            $blueprints = new Data\Blueprints(__DIR__ . '/blueprints/');
            $extends = $blueprints->get('addons');
            
            $blueprint->extend($extends, true);
            $inEvent = false;
        }
    }

}
